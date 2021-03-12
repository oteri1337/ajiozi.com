<?php


use Phinx\Seed\AbstractSeed;

class Users extends AbstractSeed
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
        for ($i = 1; $i < 24; $i++) {
            $data[] = [
                'email' => $faker->email,
                'password' => sha1("password"),
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'other_name' => $faker->suffix,
                'phone_number' => $faker->phoneNumber,
                'address' => $faker->address,
                'city' => $faker->city,
                'post_code' => $faker->postcode,
                'state' => $faker->state,
                'country' => $faker->country,
                'created_at'    => date('Y-m-d H:i:s'),
                'updated_at'    => date('Y-m-d H:i:s'),
            ];
        }

        $this->table('users')->insert($data)->save();
    }
}
