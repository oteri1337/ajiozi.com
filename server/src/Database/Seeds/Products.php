<?php


use Phinx\Seed\AbstractSeed;

class Products extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $data = [];
        for ($i = 1; $i < 68; $i++) {
            $data[] = [
                'title' => $faker->name,
                'description' => $faker->paragraph(3,false),
                'slug' => $faker->slug,
                'image_one' => 'product-h'.$i.'.png',
                'price' => $this->float_rand(1000,10000),
                'created_at'    => date('Y-m-d H:i:s'),
                'updated_at'    => date('Y-m-d H:i:s'),
            ];
        }

        $this->table('products')->insert($data)->save();
    }

    private function float_rand($Min, $Max, $round=0){
        //validate input
        if ($Min>$Max) { $min=$Max; $max=$Min; }
        else { $min=$Min; $max=$Max; }
        $randomfloat = $min + mt_rand() / mt_getrandmax() * ($max - $min);
        if($round>0)
        $randomfloat = round($randomfloat,$round);
        return $randomfloat;
}

}
